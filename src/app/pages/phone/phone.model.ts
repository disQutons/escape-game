export interface PhoneContact {
  id: number;
  name: string;
  number: string;
  avatar?: string;
  audioFile: string;
  pickupDelay: number;
  requiredApps?: ('discord' | 'instagram')[];
}

export interface CallState {
  isActive: boolean;
  contact?: PhoneContact;
  status: 'dialing' | 'connected' | 'ended' | 'error';
  currentDuration: number;
  isGameEnding?: boolean;
}