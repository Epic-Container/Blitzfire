// utils.ts

/**
 * Mengubah nilai persentase menjadi satuan vh.
 * @param percentage Nilai persentase yang ingin dikonversi.
 * @returns Nilai dalam satuan vh.
 */
export function percentageToVh(percentage: number): number {
    return (percentage / 100) * window.innerHeight;
}
