import { COMMON_INLINE_STYLES } from '@/lib/constants/styles';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: 'var(--color-primary)', borderTopColor: 'transparent' }}
        />
        <p className="text-sm font-medium" style={COMMON_INLINE_STYLES.textMuted}>
          Loading...
        </p>
      </div>
    </div>
  );
}
