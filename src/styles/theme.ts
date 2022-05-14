import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils';

export const theme = extendTheme({
  styles: {
    global: (props: Dict<any>) => ({
      "::-webkit-scrollbar": {
        width: "9px",
        height: "9px"
      },
      "::-webkit-scrollbar-track": {
        background: mode("#b3b3b3", "gray.800")(props),
        border: "0px #fff"
      },
      "::-webkit-scrollbar-thumb": {
        background: mode("#feb2b2", "#feb2b2")(props)
      }
    })
  }
});

