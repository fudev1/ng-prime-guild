export interface DiscordUser {
    id: string;
    username: string;
    discriminator: number;
    avatar: string;
    email?: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: DiscordUser | null;
    loading: boolean;
    error: string | null;
}