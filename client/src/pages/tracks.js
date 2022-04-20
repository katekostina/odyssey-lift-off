import React from 'react';
import { Layout } from '../components';
import TrackCard from '../containers/track-card';
import { useQuery, gql } from '@apollo/client';

const TRACKS = gql`
    query getTracks {
        tracksForHome {
            title
            modulesCount
            thumbnail
            author {
                id
                name
                photo
            }
            id
            length
        }
    }
`;

const SPACECATS = gql`
    query ListSpaceCats {
        spaceCats {
            name
            age
            missions {
                name
                description
            }
        }
    }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;


  return <Layout grid>
    {data?.tracksForHome?.map(track => (
      <TrackCard key={track.id} track={track} />
    ))}
  </Layout>;
};

export default Tracks;
