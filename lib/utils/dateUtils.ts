export const formatDate = (dateString: string | null, current: boolean): string => {
  if (current) return 'Present';
  if (!dateString) return '';

  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
};
