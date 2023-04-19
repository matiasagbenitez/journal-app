import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {/* LOGIN Y REGISTRO */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* JOURNAL APP */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
