declare const state: AppState

type AppState = {
    campaigns: Campaign[]
}

type Campaign = {
    campaignId: string
    name: string
    calendarWeek: string // <-- This needs to be a CalendarWeek object to be usable, but needs to be stored as string
}

/**
 * 
 */
export function CampaignsRow({week}) {
    const campaigns = getCampaigns(state) // Provided through redux connect
    return (
        <section>
            <h2>Campaigns for {week}</h2>
            {campaigns.map(campaign => <CampaignCard campaign={campaign} key={campaign.campaignId} />)}
        </section>
    )
}

/**
 * 
 */
export function CampaignCard({campaign}) {
    const {name, calendarWeek} = campaign
    return (
        <section>
            <h2>{name}</h2>
            <div>Planned for: {calendarWeek.format('Y [Week] W')}</div>
        </section>
    )
}

/**
 * Gets a list of campaigns from the store, does SOME transform
 */
export function getCampaigns(state: AppState) {
    return state.campaigns.map(campaign => ({ // <-- data transform
        ...campaign,
        calendarWeek: new CalendarWeek(campaign.calendarWeek)
    }))
}

// ...

declare class CalendarWeek {
    constructor(calendarWeek: string)

    // ...
    // Contains some very important methods, getters, and setters
}
