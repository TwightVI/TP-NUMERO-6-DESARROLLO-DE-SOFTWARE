const SUPABASE_URL = "PEGÁ_ACÁ_TU_SUPABASE_URL";
const SUPABASE_PUBLISHABLE_KEY = "PEGÁ_ACÁ_TU_PUBLISHABLE_KEY";

export const supabaseConfigurationError = !window.supabase
  ? "No se cargó Supabase. Revisá la conexión a internet."
  : SUPABASE_URL === "PEGÁ_ACÁ_TU_SUPABASE_URL" ||
      SUPABASE_PUBLISHABLE_KEY === "PEGÁ_ACÁ_TU_PUBLISHABLE_KEY"
    ? "Configurá la URL y la Publishable Key de tu proyecto en supabaseClient.js."
    : "";

export const supabase = supabaseConfigurationError
  ? null
  : window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
