// auth.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly USER_KEY = 'user';

    constructor(private storage: Storage) { }

    async login(username: string, password: string): Promise<boolean> {
        // Replace this with your actual authentication logic (e.g., API call)
        const success = await this.selectIsAuthenticated(username, password);

        if (success) {
            // Save user data to storage on successful login
            await this.storage.set(this.USER_KEY, { username, password });
        }

        return success;
    }

    async logout(): Promise<void> {
        // Clear user data from storage (logout)
        await this.storage.remove(this.USER_KEY);
    }

    async isAuthenticated(): Promise<boolean> {
        // Check if the user is authenticated (e.g., user data exists in storage)
        const user = await this.storage.get(this.USER_KEY);
        return !!user;
    }

    private async selectIsAuthenticated(username: string, password: string): Promise<boolean> {
        // Simulate login logic (replace with your actual authentication logic)
        // For demonstration purposes, assume login is successful if username and password are not empty
        return !!username && !!password;
    }
}
