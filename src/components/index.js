import {
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow
} from 'components/Table'
import { Tooltip, TooltipPad, TooltipButton } from 'components/Tooltip'
import ActionItem from 'components/ActionItem'
import Avatar from 'components/Avatar'
import BoxList from 'components/BoxList'
import Button from 'components/Buttons/Button'
import Chevron from 'components/Chevron'
import ColorButton from 'components/Buttons/ColorButton'
import EmployeeSelector from 'components/EmployeeSelector'
import Form from 'components/Form'
import FormRow from 'components/FormRow'
import Icon from 'components/Icon'
import Illustration from 'components/Illustration'
import InlineTooltip from 'components/InlineTooltip'
import LinkButton from 'components/Buttons/LinkButton'
import Loading from 'components/Loading'
import Modal from 'components/Modal'
import ModalFooter from 'components/Modal/Footer'
import ModalPad from 'components/Modal/Pad'
import ModalSubmit from 'components/Modal/Submit'
import PricingCard from 'components/PricingCard'
import ReadOnlyField from 'components/ReadOnlyField'
import RoundedBadge from 'components/RoundedBadge'
import ScrollableItem from 'components/ScrollableItem'
import ScrollableList from 'components/ScrollableList'
import Separator from 'components/Separator'
import SidebarButton from 'components/Buttons/SidebarButton'
import Steps from 'components/Steps'
import Text from 'components/Inputs/Text'
import Select from 'components/Inputs/Select'
import DayPicker from 'components/Inputs/DayPicker'
import Title from 'components/Title'
import WithToggleState from 'components/WithToggleState'

import configuration from 'shared'

export default function main ({ iconsPath }) {
  configuration.iconsPath = iconsPath
}

export {
  Avatar,
  ActionItem,
  BoxList,
  Button,
  Chevron,
  ColorButton,
  DayPicker,
  EmployeeSelector,
  Form,
  FormRow,
  Icon,
  Illustration,
  InlineTooltip,
  LinkButton,
  Loading,
  Modal,
  ModalFooter,
  ModalPad,
  ModalSubmit,
  PricingCard,
  ReadOnlyField,
  RoundedBadge,
  ScrollableItem,
  ScrollableList,
  Select,
  Separator,
  SidebarButton,
  Steps,
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Text,
  Title,
  Tooltip,
  TooltipPad,
  TooltipButton,
  WithToggleState
}
