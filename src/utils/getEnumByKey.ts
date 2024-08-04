export function getEnumValueByKey(enumObj: any, key: string): number | undefined {
    return enumObj[key as keyof typeof enumObj];
}
