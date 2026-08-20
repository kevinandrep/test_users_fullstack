import { useMutation } from "@tanstack/react-query";
import { registerApi } from "./auth.api";
import type { RegisterInput } from "../../shared/types";

export function useRegister() {
  return useMutation({
    mutationFn: (input: RegisterInput) => registerApi(input),
  });
}
