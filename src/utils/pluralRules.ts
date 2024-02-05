
interface vars {
    zero?: string
    one?: string
    two?: string
    few?: string
    many?: string
    other?: string
}

export function pluralRules(val: number, vars: vars): string | undefined {
    const key = new Intl.PluralRules("ar-EG").select(val)
    return vars[key]
}
