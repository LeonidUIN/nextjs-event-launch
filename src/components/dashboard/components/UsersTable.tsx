import { User } from "../types";

interface UsersTableProps {
  users: User[];
  isLoading: boolean;
}

export function UsersTable({ users, isLoading }: UsersTableProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center p-5">
        <div className="w-10 h-10 rounded-full border-4 border-solid animate-spin border-t-indigo-600 border-zinc-100" />
      </div>
    );
  }

  return (
    <table className="w-full border-collapse min-w-[600px]">
      <thead>
        <tr className="text-left border-b border-solid border-b-zinc-100">
          <th className="px-2 py-3">Photo</th>
          <th className="px-2 py-3">Name</th>
          <th className="px-2 py-3">City</th>
          <th className="px-2 py-3">Country</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, index) => (
          <tr key={index} className="border-b border-solid border-b-zinc-100">
            <td className="px-2 py-3">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={user.picture.thumbnail}
                alt={`${user.name.first} ${user.name.last}`}
              />
            </td>
            <td className="px-2 py-3">
              {user.name.first} {user.name.last}
            </td>
            <td className="px-2 py-3">{user.location.city}</td>
            <td className="px-2 py-3">{user.location.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
