import { useAuth0 } from '@auth0/auth0-react';
import { UserRole } from '../structure/types/userTypes';

export function useUserRole(): UserRole {
  const { isAuthenticated, user } = useAuth0();
  if (isAuthenticated) {
    ///@ts-ignore
    const userRole: UserRole = user['https://hasura.io/jwt/claims'].role;
    const validRoles = Object.values(UserRole);
    if (!validRoles.includes(userRole)) {
      throw new Error(
        `Role ${userRole} which was received from the server doesn't match with any local role`
      );
    }
    return userRole;
  } else {
    return UserRole.Visitor;
  }
}

export function useIsFirstLogin(): boolean {
  const { isAuthenticated, user } = useAuth0();
  if (isAuthenticated) {
    ///@ts-ignore
    return user['https://hasura.io/jwt/claims'].firstTime;
  } else {
    return false;
  }
}
