import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.smallMargin,
    backgroundColor: Colors.cloud,
    borderRadius: Metrics.smallMargin
  },
  sectionHeader: {
    marginTop: 0,
    width: Metrics.screenWidth,
    backgroundColor: Colors.background
  },
  boldLabel: {
    fontWeight: 'bold',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
    marginTop: Metrics.smallMargin
  },
  label: {
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center'
  },
  listContent: {
    justifyContent: 'center',
    flexDirection: 'column'
  }
})
