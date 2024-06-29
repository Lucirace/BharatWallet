import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  // TODO: can u figure out what the type should be here?
  onSignin: any;
  onSignout: any;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="flex justify-between border-b px-4 border-slate-900 dark:bg-gray-900">
      <img src="logo2.svg" className="w-10 h-11 pt-1 " />
      <div className="text-lg flex flex-col justify-center font-semibold whitespace-nowrap dark:text-white">
        BHARAT WALLET
      </div>
      <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
