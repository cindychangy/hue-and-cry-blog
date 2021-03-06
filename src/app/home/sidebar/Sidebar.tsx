import React from 'react';

import { Box, Typography, Link, SubHeading } from 'components/atoms';
import { SectionHeading, } from 'components/molecules';

import { AppRoute } from 'app/App.types';
import { SidebarProps } from './Sidebar.types';
import { useStyles } from './Sidebar.styles';

export const Sidebar = ({ posts }: SidebarProps) => {
  const classes = useStyles();
  
  const sidebarPosts = posts.map(post => (
    <Box my={3} key={post.id}>
      <SubHeading
        heading={post.categories_names[0]}
        link={`${encodeURIComponent(post.categories_names[0].replace(/\s+/g, '-').toLowerCase())}`}
      />
      <Typography className={classes.articleTitle}>
        <Link href={post.slug} color="inherit">
          {post.title.rendered}
        </Link>
      </Typography>
    </Box>
  ));

  return (
    <Box className={classes.sidebarWrapper}>
      <SectionHeading heading="Featured Stories" />
      {sidebarPosts}
      <Link href={AppRoute.ABOUT}>
        <Box className={classes.aboutBox}>
          <Typography className={classes.aboutHeader}>
            <span>What</span><span>happened</span><span>to her?</span>
          </Typography>
          <Typography className={classes.aboutText}>
            Learn more about the mission of Hue and Cry.
          </Typography>
        </Box>
      </Link>
    </Box>
  )
}
