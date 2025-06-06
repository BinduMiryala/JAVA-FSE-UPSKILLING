SELECT e.title
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id
HAVING COUNT(s.session_id) = (
    SELECT MAX(session_count) FROM (
        SELECT COUNT(*) AS session_count FROM Sessions GROUP BY event_id
    ) AS counts
);