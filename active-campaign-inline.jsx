import clsx from 'clsx';
import React from 'react';

/**
 * 
 */
export function CampaignsRow({week}) {
    const campaigns = getCampaigns(state)

    return (
        <div>
            <h2>Campaigns for {week}</h2>
            {campaigns.map(campaign => (
                <CampaignCard
                    campaign={campaign}
                    key={campaign.campaignId}
                />
            ))}
        </div>
    )
}

export function CampaignCard ({campaign}) {
    const {isActive, name} = campaign
    const className = clsx(isActive && 'active', 'campaign-card');

    return (
        <div className={className} onClick={() => setActiveCampaignId(store, activeCampaignId)}>
            {name}
        </div>
    );
}

const store = {
    campaigns: [
        { campaignId: 'campaign-1', name: 'Addidas Specials', isActive: false },
        { campaignId: 'campaign-2', name: 'Summer Heat', isActive: true },
        { campaignId: 'campaign-3', name: 'Footwork' },
        { campaignId: 'campaign-4', name: 'Z Essentials' },
    ]
}

function setActiveCampaignId(state, campaignId) {
    const campaigns = store.campaigns.map(campaign => {
        if (campaign.campaignId === campaignId) {
            return {...campaign, isActive: true}
        }

        if (campaign.isActive) {
            return {...campaign, isActive: false}
        }

        return campaign;
    })

    store = {
        campaigns: [...campaigns]
    }
}
