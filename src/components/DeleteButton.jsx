import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteMaster } from "@/services/mastersServices";

export const DeleteButton = ({ id }) => {
  const handleDelete = () => {
    const user = JSON.parse(localStorage.getItem("userData"));
    deleteMaster(id, user.token);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="h-6 bg-transparent text-5xl font-semibold text-red-600">
          &times;
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this master?
          </AlertDialogTitle>
          <AlertDialogDescription>There is no way back!</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            onClick={handleDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
