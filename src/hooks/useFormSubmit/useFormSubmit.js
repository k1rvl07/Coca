import { hooks } from "@exports";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useFormSubmit = (url, options = {}) => {
  const { useFetch } = hooks;
  const { fetchData, loading, response } = useFetch();
  const [swalConfig, setSwalConfig] = useState(null);

  const swalConfigDefault = {
    customClass: {
      popup: "swal__popup",
      icon: "swal__icon",
      title: "swal__title",
      htmlContainer: "swal__text",
      confirmButton: "swal__confirm-button",
      actions: "swal__actions",
    },
  };

  const submit = useCallback(
    async (formData, config) => {
      setSwalConfig(config || {});
      await fetchData(url, {
        ...options,
        method: options.method || "POST",
        body: formData,
      });
    },
    [fetchData, options, url],
  );

  useEffect(() => {
    if (!response || !swalConfig) {
      return;
    }

    let handled = false;

    if (swalConfig.errorConditions?.length) {
      for (const condition of swalConfig.errorConditions) {
        if (condition.condition(response)) {
          Swal.fire({
            ...condition.error,
            icon: condition.error.icon || "warning",
            ...swalConfigDefault,
          });
          handled = true;
          break;
        }
      }
    }

    if (!handled && swalConfig.successCondition?.(response)) {
      Swal.fire({
        ...swalConfig.success,
        icon: swalConfig.success?.icon || "success",
        ...swalConfigDefault,
      });
      handled = true;
    }

    if (!handled && !response.ok) {
      const errorMessage = response.data?.message || "Unknown error";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
        ...swalConfigDefault,
        ...(swalConfig.failure || {}),
      });
    }
  }, [response, swalConfig]);

  return { submit, loading };
};
