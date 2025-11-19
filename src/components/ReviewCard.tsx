import { useEffect, useState } from "react";
import { getUser, type userModel } from "../utils/usuarios";

interface ReviewCardProps {
  UserID: string;
  Rating: number;
  Comment?: string;
}

export default function ReviewCard({
  UserID,
  Rating,
  Comment,
}: ReviewCardProps) {
  const [usuario, setUsuario] = useState<userModel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getUser(UserID).then((data) => {
      if (isMounted) {
        setUsuario(data);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [UserID]);

  return (
    <div className="border border-[#D9D9D9] p-4 rounded-xl mt-3 shadow-sm">
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <span className="font-semibold">
            {loading ? "Cargando..." : usuario?.nombre ?? UserID}
          </span>
        </div>

        <div className="flex items-center gap-1 bg-[#FFF5CE] px-3 py-px rounded-2xl">
          <i className="bx bxs-star bx-xs text-[#E7C817]"></i>
          <span className="font-light text-xs">{Rating}</span>
        </div>
      </div>

      <p className="text-gray-600 mt-2">{Comment}</p>
    </div>
  );
}
