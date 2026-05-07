import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { SetupTest, DashboardUI } from "./components/dashboard.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SetupTest />
		<DashboardUI />
	</StrictMode>,
);
