import { useState, useEffect, useCallback } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { getAdminToken, setAdminToken, clearAdminToken } from "../lib/adminAuth";

export function useAdminAuth() {
  const [token, setToken] = useState<string | null>(getAdminToken);
  const [isAdmin, setIsAdmin] = useState(false);

  const verifyResult = useQuery(
    api.admin.verifyToken,
    token ? { token } : "skip"
  );

  useEffect(() => {
    if (verifyResult === true) {
      setIsAdmin(true);
    } else if (verifyResult === false) {
      setIsAdmin(false);
      clearAdminToken();
      setToken(null);
    }
  }, [verifyResult]);

  const loginMutation = useMutation(api.admin.login);

  const login = useCallback(async (password: string): Promise<boolean> => {
    const result = await loginMutation({ password });
    if (result.success && result.token) {
      setAdminToken(result.token);
      setToken(result.token);
      setIsAdmin(true);
      return true;
    }
    return false;
  }, [loginMutation]);

  const logout = useCallback(() => {
    clearAdminToken();
    setToken(null);
    setIsAdmin(false);
  }, []);

  return { isAdmin, token, login, logout };
}
