import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-emerald-700 p-4 sm:p-6">
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex justify-around items-center mb-6 mr-10">
          <button onClick={() => navigate(-1)} className="text-slate-100">
            <ChevronLeftIcon />
          </button>
          <Title className="text-center  flex-grow">Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
