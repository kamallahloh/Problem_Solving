-- 1661. Average Time of Process per Machine
-- https://leetcode.com/problems/average-time-of-process-per-machine/description/
DROP TABLE IF EXISTS activity CASCADE;

DROP TYPE IF EXISTS activities_enum CASCADE;

CREATE TYPE activities_enum AS ENUM ('start', 'end');

CREATE TABLE
    activity (
        id SERIAL PRIMARY KEY NOT NULL,
        machine_id INT,
        process_id INT,
        activity_type activities_enum,
        timestamp FLOAT (5, 2) DEFAULT 0.000
        -- timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        -- timestamp TIMESTAMP DEFAULT NOW ()
    );

INSERT INTO
    activity (machine_id, process_id, activity_type, timestamp)
VALUES
    (0, 0, 'start', 0.712),
    (0, 0, 'end', 1.520),
    (0, 1, 'start', 3.140),
    (0, 1, 'end', 4.120),
    (1, 0, 'start', 0.550),
    (1, 0, 'end', 1.550),
    (1, 1, 'start', 0.430),
    (1, 1, 'end', 1.420),
    (2, 0, 'start', 4.100),
    (2, 0, 'end', 4.512),
    (2, 1, 'start', 2.500),
    (2, 1, 'end', 5.000) RETURNING *;

-- Write your MySQL query statement below
SELECT
    a.machine_id,
    ROUND(AVG(b.timestamp - a.timestamp), 3) AS processing_time
FROM
    activity a
    JOIN activity b ON a.machine_id = b.machine_id
    AND a.process_id = b.process_id
    AND a.activity_type = 'start'
    AND b.activity_type = 'end'
GROUP BY
    1;