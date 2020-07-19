import { List } from '@material-ui/core';
import * as React from 'react';
import { WrongItemDialog } from '../../../../components/WrongItemDialog';
import { Item } from '../../../../models/Item';
import { StreamingServiceId } from '../../../../streaming-services/streaming-services';
import { HistoryListItem } from './HistoryListItem';

interface HistoryListProps {
	dateFormat: string;
	items: Item[];
	serviceId: StreamingServiceId;
	serviceName: string;
}

export const HistoryList: React.FC<HistoryListProps> = (props: HistoryListProps) => {
	const { dateFormat, items, serviceId, serviceName } = props;

	return (
		<>
			<List>
				{items.map((item) => (
					<HistoryListItem
						key={item.index}
						dateFormat={dateFormat}
						item={item}
						serviceId={serviceId}
						serviceName={serviceName}
					/>
				))}
			</List>
			<WrongItemDialog />
		</>
	);
};
