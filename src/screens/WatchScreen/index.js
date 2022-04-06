import React, { useState, useMemo, useCallback } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import { theme } from '~/styles/theme';
import { dataStore } from '~/services/stores';

import { Container, GoBackButton } from '~/components/atoms';

export const WatchScreen = () => {
  const [playing, setPlaying] = useState(false);

  const { selectedData } = dataStore();

  const youtubeId = useMemo(() => {
    const id = selectedData.trailer_url.split('v=')[1].substring(0, 11);

    return id;
  }, [selectedData]);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <Container align="flex-start" justify="center">
      <GoBackButton />

      <YoutubePlayer
        width={theme.metrics.width}
        height={theme.metrics.px(300)}
        play={playing}
        videoId={youtubeId}
        onChangeState={onStateChange}
      />
    </Container>
  );
};
