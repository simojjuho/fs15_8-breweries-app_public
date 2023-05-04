export interface Brewery {
    id: string
    name: string,
    brewery_type: BrewertType
    address_1: string
    city: string
    state_province: string
    postal_code: string
    country: string
    longitude: string
    latitude: string
    phone: string
    website_url: string
    state: string
    street: string

}

type BrewertType = 'micro' | 'brewpub' | 'large' | 'closed' | 'proprietor' | 'contract' | 'planning' | 'bar' | 'nano' | 'regional' 