import React, { useEffect, useState } from 'react';

const AuditLog = () => {
    const [logEntries, setLogEntries] = useState([]);

    useEffect(() => {
        // Fetch audit log entries from the database
        const fetchLogEntries = async () => {
            try {
                const response = await fetch('/api/audit-log'); // Update with your API endpoint
                const data = await response.json();
                setLogEntries(data);
            } catch (error) {
                console.error('Error fetching audit log entries:', error);
            }
        };

        fetchLogEntries();
    }, []);

    return (
        <div>
            <h2>Audit Log</h2>
            <ul>
                {logEntries.map((entry) => (
                    <li key={entry.id}>{entry.timestamp}: {entry.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default AuditLog;
