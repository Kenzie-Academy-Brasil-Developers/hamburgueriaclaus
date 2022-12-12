export function valueReal(num: number): string {
    return num.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

