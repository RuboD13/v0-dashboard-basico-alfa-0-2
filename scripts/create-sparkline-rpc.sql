-- [v0] RPC function to calculate daily lead counts for the last 7 days
-- This replaces the JavaScript loop with a single efficient database query

CREATE OR REPLACE FUNCTION get_daily_lead_counts(
  p_referencias TEXT[]
)
RETURNS TABLE (
  referencia TEXT,
  day_date DATE,
  lead_count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    "Inmueble" as referencia,
    DATE("created_at") as day_date,
    COUNT(*) as lead_count
  FROM "Clientes"
  WHERE 
    "Inmueble" = ANY(p_referencias)
    AND "created_at" >= (CURRENT_DATE - INTERVAL '6 days')
    AND "created_at" < (CURRENT_DATE + INTERVAL '1 day')
  GROUP BY "Inmueble", DATE("created_at")
  ORDER BY "Inmueble", day_date;
END;
$$ LANGUAGE plpgsql;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_daily_lead_counts(TEXT[]) TO authenticated;
