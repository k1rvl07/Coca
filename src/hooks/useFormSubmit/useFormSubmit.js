import { useState } from "react";
import Swal from "sweetalert2";

export const useFormSubmit = (url, options = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

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
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: options.method || "POST",
        headers: options.headers || { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResponse(data);

      if (swalConfig.errorConditions && Array.isArray(swalConfig.errorConditions)) {
        for (const condition of swalConfig.errorConditions) {
          if (condition.condition(data)) {
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

      if (swalConfig.successCondition?.(data)) {
        if (swalConfig.success) {
          Swal.fire({
            ...swalConfig.success,
            ...swalConfigDefault,
          });
        }
        return;
      }

      if (response.ok) {
        return;
      }

      throw new Error(data.message || `Error: ${response.status}`);
    } catch (err) {
      setError(err.message);

      if (swalConfig.failure) {
        Swal.fire({
          ...swalConfig.failure,
          ...swalConfigDefault,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error, response };
};
