import React from 'react'

import {SideBarProps} from '@/types/sidebar'
import {UsingChart} from '@/types/chart'

import {SideBarContainer, SideBarContent} from '@/styles/SideBar.styled'

const SideBarComponents: React.FC<SideBarProps<UsingChart>> = ({chartName, onClickChart}) => {
	const onClick = () => onClickChart(chartName)

	return <SideBarContent onClick={onClick}> {chartName.toUpperCase()} </SideBarContent>
}

const SideBar: React.FC<Pick<SideBarProps<UsingChart>, 'onClickChart'>> = ({onClickChart}) => {
	return (
		<SideBarContainer>
			<SideBarComponents chartName={'bar'} onClickChart={onClickChart} />
			<SideBarComponents chartName={'line'} onClickChart={onClickChart} />
			<SideBarComponents chartName={'doughnut'} onClickChart={onClickChart} />
			<SideBarComponents chartName={'radar'} onClickChart={onClickChart} />
		</SideBarContainer>
	)
}



export default SideBar
