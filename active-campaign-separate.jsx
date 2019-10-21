import clsx from 'clsx';
import React from 'react';

function CampaignCard ({activeCampaignId, campaignId, ...campaignInfo}) {
    const className = clsx(activeCampaignId && 'active', 'campaign-card');
    
    return (
        <div className={className}>
            {campaignInfo.name}
        </div>
    );
}

