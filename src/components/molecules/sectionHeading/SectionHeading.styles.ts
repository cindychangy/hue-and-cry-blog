import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  divider: {
    background: palette.common.black,
    height: '2px',
    marginBottom: '12px',
  }
}));