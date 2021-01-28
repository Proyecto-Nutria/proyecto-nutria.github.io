import { useAuth0 } from '@auth0/auth0-react';
import { UserRole } from '../structure/types/userTypes';

export function useUserRole(): UserRole {
  const { isAuthenticated, user } = useAuth0();
  if (isAuthenticated) {
    return user['https://hasura.io/jwt/claims'].role;
  } else {
    return UserRole.Visitor;
  }
}
