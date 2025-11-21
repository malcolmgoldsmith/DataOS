import { useState, useEffect } from 'react';

interface MessageData {
  msg_category: string | null;
  msg_display: string | null;
  number_of_messages_sent: number;
  displayed: number;
  clicked: number;
  engagement_rate: number | null;
}

interface GraphQLResponse {
  data: {
    table: Array<{
      udc_smart_messages: MessageData;
    }>;
  };
  errors?: Array<{ message: string }>;
}

const mockData: MessageData[] = [
  { msg_category: 'PROMOTIONAL', msg_display: null, number_of_messages_sent: 13423, displayed: 2016, clicked: 0, engagement_rate: 0 },
  { msg_category: 'FUNCTIONAL', msg_display: null, number_of_messages_sent: 3235, displayed: 36, clicked: 0, engagement_rate: 0 },
  { msg_category: 'INFORMATIONAL', msg_display: null, number_of_messages_sent: 1339, displayed: 35, clicked: 0, engagement_rate: 0 },
  { msg_category: 'PROMOTIONAL', msg_display: 'Dismissed', number_of_messages_sent: 693, displayed: 0, clicked: 0, engagement_rate: null },
  { msg_category: 'PROMOTIONAL', msg_display: 'Engaged', number_of_messages_sent: 191, displayed: 0, clicked: 191, engagement_rate: null },
  { msg_category: 'PROMOTIONAL', msg_display: 'Timeout', number_of_messages_sent: 167, displayed: 0, clicked: 0, engagement_rate: null },
  { msg_category: null, msg_display: null, number_of_messages_sent: 161, displayed: 0, clicked: 0, engagement_rate: null },
  { msg_category: 'PROMOTIONAL', msg_display: 'Error', number_of_messages_sent: 74, displayed: 0, clicked: 0, engagement_rate: null },
  { msg_category: 'INFORMATIONAL', msg_display: 'Dismissed', number_of_messages_sent: 12, displayed: 0, clicked: 0, engagement_rate: null },
  { msg_category: 'FUNCTIONAL', msg_display: 'Dismissed', number_of_messages_sent: 12, displayed: 0, clicked: 0, engagement_rate: null },
  { msg_category: 'FUNCTIONAL', msg_display: 'Timeout', number_of_messages_sent: 10, displayed: 0, clicked: 0, engagement_rate: null },
  { msg_category: 'INFORMATIONAL', msg_display: 'Error', number_of_messages_sent: 10, displayed: 0, clicked: 0, engagement_rate: null },
  { msg_category: 'FUNCTIONAL', msg_display: 'Engaged', number_of_messages_sent: 10, displayed: 0, clicked: 10, engagement_rate: null },
  { msg_category: 'INFORMATIONAL', msg_display: 'Timeout', number_of_messages_sent: 7, displayed: 0, clicked: 0, engagement_rate: null },
];

export function useMessageData() {
  const [data, setData] = useState<MessageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const query = `query LensQuery {
          table(offset: 0, timezone: "UTC", orderBy: {}) {
            udc_smart_messages {
              msg_category
              msg_display
              number_of_messages_sent
              displayed
              clicked
              engagement_rate
            }
          }
        }`;

        const response = await fetch(
          '/api/graphql',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer bWFpblQuMTkwNjkzYjUtZmEyYy00YzA5LWJhMjItYWM2OGM0YmZhODQz',
            },
            body: JSON.stringify({ query }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: GraphQLResponse = await response.json();

        // GraphQL can return partial data even with errors (e.g., NaN/Infinity serialization issues)
        if (result.data && result.data.table) {
          const messages = result.data.table.map(item => item.udc_smart_messages);
          setData(messages);
          setError(null);

          // Log errors but don't treat them as failures if we have data
          if (result.errors) {
            console.warn('GraphQL returned data with warnings:', result.errors);
          }
        } else if (result.errors) {
          setError(result.errors[0].message);
          console.error('GraphQL errors:', result.errors);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch data';
        setError(errorMessage);
        console.error('Failed to fetch data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
