export interface Location {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}

export interface UsersList {
  data: User[];
  total: number;
  page: number;
  limit: number;
}

export interface User {
  id: string;
  title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other' | '';
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: Location;
}

export interface UserPreview {
  id: string;
  title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
  firstName: string;
  lastName: string;
  picture: string;
}
