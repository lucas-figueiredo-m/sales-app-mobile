import withObservables, { ObservableifyProps } from '@nozbe/with-observables';
import { Client } from '@salesapp/types';

import React from 'react';
import { Insets, Linking, TouchableOpacity, View } from 'react-native';
import { ClientService } from '@salesapp/services';
import { FlashList } from '@shopify/flash-list';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { Phone } from '@salesapp/icons';
import { Label, SVG } from '@salesapp/components';

interface Props {
  clients: Client[];
}

type InputProps = ObservableifyProps<Props, 'clients'>;

type ClientCardProps = {
  client: Client;
};

const CLIENT_CARD_HEIGHT = 80;

const hitSlop: Insets = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
};

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  const styles = useThemedStyles(themedClientCard);
  return (
    <TouchableOpacity style={styles.root}>
      <View>
        <Label.H3 t={client.company_name} />
        <Label.H4>
          <Label.H4 t={client.buyer_first_name} />
          <Label.H4 t=" " />
          <Label.H4 t={client.buyer_last_name} />
        </Label.H4>
      </View>
      <TouchableOpacity
        hitSlop={hitSlop}
        onPress={() => Linking.openURL(`tel:${client.phone}`)}>
        <SVG
          width={24}
          height={24}
          color={'black'}
          xml={Phone as unknown as string}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export const ClientCardToObserve: React.FC<Props> = ({ clients }) => {
  const styles = useThemedStyles(themedClientList);
  // TODO: fix react bad smell below
  const ClientListSeparator: React.FC = () => <View style={styles.separator} />;
  return (
    <View style={styles.root}>
      <FlashList
        data={clients}
        ItemSeparatorComponent={() => <ClientListSeparator />}
        renderItem={({ item }) => <ClientCard client={item} />}
        keyExtractor={item => item.id}
        estimatedItemSize={CLIENT_CARD_HEIGHT}
      />
    </View>
  );
};

const themedClientCard = createThemedStyles(({ width, colors }) => ({
  root: {
    width: '100%',
    backgroundColor: colors.Cards.Background,
    height: CLIENT_CARD_HEIGHT,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
  },
}));

const themedClientList = createThemedStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  separator: {
    height: 5,
  },
}));

const enhance = withObservables(['clients'], ({ clients }: InputProps) => ({
  clients,
}));

export const ClientCardList = enhance(ClientCardToObserve);
