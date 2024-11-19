import { createClient } from "@supabase/supabase-js";
import { appConfig } from "../../config/appConfig";

export const supabase = createClient(
	appConfig.supabase.url,
	appConfig.supabase.key
);
