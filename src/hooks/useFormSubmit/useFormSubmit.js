import { hooks } from "@exports";
import { useEffect, useState } from "react";
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

  const submit = async (formData, swalConfig = {}) => {
    setSwalConfig(swalConfig);
    await fetchData(url, {
      ...options,
      method: options.method || "POST",
      body: formData,
    });
  };

  useEffect(() => {
    if (response && swalConfig) {
      if (swalConfig.errorConditions && Array.isArray(swalConfig.errorConditions)) {
        for (const condition of swalConfig.errorConditions) {
          if (condition.condition(response)) {
            if (condition.error) {
              Swal.fire({
                ...condition.error,
                ...swalConfigDefault,
              });
            }
            return;
          }
        }
      }

      if (swalConfig.successCondition?.(response)) {
        if (swalConfig.success) {
          Swal.fire({
            ...swalConfig.success,
            ...swalConfigDefault,
          });
        }
        return;
      }

      if (!response.ok) {
        if (swalConfig.failure) {
          Swal.fire({
            ...swalConfig.failure,
            ...swalConfigDefault,
          });
        }
        return;
      }
    }
  }, [response, swalConfig]);

  return { submit, loading, response };
};
