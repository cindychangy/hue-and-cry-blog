import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  imageBox: {
    height: spacing(24),
    width: '100%',
    marginBottom: '14px',
    [breakpoints.down('xs')]: {
      height: spacing(34),
    },
    [breakpoints.down('sm')]: {
      height: spacing(30),
    },
  },
  title: {
    color: palette.common.black,
    transition: '.2s, box-shadow .2s, -webkit-box-shadow .2s',
    textDecoration: 'none',
    lineHeight: 1,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'inset 0 -3px #fff, inset 0 -6px 0 #000',
      textDecoration: 'none',
      opacity: 1,
      [breakpoints.down('sm')]: {
        boxShadow: 'none',
      },
    },
    [breakpoints.down('sm')]: {
      fontSize: '2.4rem',
    },
  },
  excerpt: {
    fontSize: '0.96rem',
    color: '#505356',
    lineHeight: 1.6,
    display: '-webkit-box',
    width: '100%',
    overflow: 'hidden',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    'text-overflow': 'ellipsis',
    margin: 0,
    height: '62px',
    [breakpoints.down('md')]: {
      fontSize: '1.1rem',
      height: '68px',
    },
  }
}));
