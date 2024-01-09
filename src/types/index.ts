export interface IUserProp {
  accountBalance: string;
  accountNumber: string;
  email: string;
  createdAt: string;
  education: {
    level: string;
    employmentStatus: string;
    duration: string;
    loanRepayment: string;
    monthlyIncome: string[];
    officeEmail: string;
    sector: string;
    email: string;
  };
  guarantor: {
    address: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber: string;
  };
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  userName: string;
  status: string;
  profile: {
    address: string;
    avatar: string;
    bvn: string;
    currency: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}
