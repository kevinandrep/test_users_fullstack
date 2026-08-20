import { useMutation } from "@tanstack/react-query";
import { loginApi } from "./auth.api";
import type { LoginInput } from "../../shared/types";

export function useLogin() {
  return useMutation({
    mutationFn: (input: LoginInput) => loginApi(input),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    },
  });
}
