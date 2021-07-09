import { UserRole } from 'utils/constants/values';

import { useAuth0 } from '@auth0/auth0-react';

export function useUserRole(): string {
  const { isAuthenticated, user } = useAuth0();
  if (isAuthenticated) {
    ///@ts-ignore
    const userRole: string = user['https://hasura.io/jwt/claims'].role;
    const validRoles = Object.values(UserRole);
    if (!validRoles.includes(userRole)) {
      throw new Error(
        `Role ${userRole} which was received from the server doesn't match with any local role`
      );
    }
    return userRole;
  } else {
    return UserRole[UserRole.visitor];
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
