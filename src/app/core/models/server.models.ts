export interface Server {
    id: string;
    name: string;
    region: string;
    status: 'online' | 'offline' | 'maintenance';
    population: number;
}
