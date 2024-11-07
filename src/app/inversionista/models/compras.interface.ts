export interface CompraAccion {
    purchaseDate: Date;                // Fecha de compra de las acciones
    quantity: number;                  // Cantidad de acciones compradas
    purchasePricePerShare: number;     // Precio por acción en el momento de la compra
    totalPurchaseCost: number;         // Costo total de la compra (Cantidad * Precio por acción)
    commission: number;                // Comisión pagada en la transacción
    currentPricePerShare: number;      // Precio actual de cada acción
    currentTotalValue: number;         // Valor actual total de las acciones (Cantidad * Precio actual)
    unrealizedProfitLoss: number;      // Ganancia o pérdida no realizada (Valor actual - Costo total)
    percentageChange: number;          // Cambio porcentual entre el precio de compra y el precio actual
    dividendsReceived: number;         // Total de dividendos recibidos desde la compra
    sector: string;                    // Sector o industria de la empresa
    ticker: string;                    // Símbolo bursátil de la empresa
    companyName: string;               // Nombre de la empresa
    holdingPeriod: string;             // Período de tenencia de las acciones
}
