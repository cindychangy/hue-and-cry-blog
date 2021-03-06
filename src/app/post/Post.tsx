import React from 'react';
import LazyLoad from 'react-lazyload';

import { Grid, Box, Divider } from 'components/atoms';
import { Header, Footer } from 'components/organisms';
import { PostHero } from './postHero/PostHero';
import { PostMeta } from './postMeta/PostMeta';
import { CalloutBox } from './calloutBox/CalloutBox';
import { RelatedPosts } from './related/relatedPosts/RelatedPosts';
import { RelatedVideos } from './related/relatedVideos/RelatedVideos';
import { RelatedPodcasts } from './related/relatedPodcasts/RelatedPodcasts';
import { Comments } from './comments/Comments';
import { Copyright } from './copyright/Copyright';

import { PostProps } from './Post.types';
import { useStyles } from './Post.styles';
import { baseURL } from 'api/types';

export const PostContainer = ({ post, relatedPosts }: PostProps) => {
  const classes = useStyles();

  return (
    <>
      <Header/>
        <PostHero
          category={post.categories_names[0]}
          title={post.title.rendered}
          bgImage={post.acf.background_image}
          featureImage={post.jetpack_featured_media_url}
        />
        <Box maxWidth={1000} m="auto" pt={4} px={{ xs: 2, md: 4 }}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <PostMeta
                categories={post.categories_names}
                location={post.acf.location}
                year={post.acf.year}
                postTitle={post.title.rendered}
                postLink={`${baseURL}/${post.slug}`}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Box 
                className={classes.articleBody}
                dangerouslySetInnerHTML={{__html: post.content.rendered}}
              >
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box maxWidth={1280} m="auto" my={6} px={{ xs: 2, md: 4 }}>
          <LazyLoad height={250} once>
            <CalloutBox
              helpInfo={post.acf.how_to_help}
              sourcesInfo={post.acf.dig_deeper}
            />
          </LazyLoad>
          <LazyLoad height={400} once>
            {!!post.acf.videos.length && (
              <>
                <Box mt={8}/>
                <RelatedVideos videos={post.acf.videos} />
                <Divider />
              </>
            )}

            {!!post.acf.podcasts.length && (
              <RelatedPodcasts podcasts={post.acf.podcasts} />
            )}

            <Divider />
            <Comments 
              postSlug={post.slug} 
              postId={post.id} 
              postTitle={post.title} 
            />
          </LazyLoad>
        </Box>
        
        <LazyLoad height={330} once>
          <RelatedPosts posts={relatedPosts} />
        </LazyLoad>

        <Box maxWidth={700} m="auto" pb={1} px={2}>
          <Copyright sources={post.acf.copyright_sources} />
        </Box>
      <Footer/>
    </>
  )
};