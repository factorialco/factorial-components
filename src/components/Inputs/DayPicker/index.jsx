// @flow
import _ from 'lodash'
import { autorun } from 'mobx'
import { observer } from 'mobx-react'
import { Field } from 'factorial-form'
import autobind from 'autobind-decorator'
import Caption from './Caption'
import moment from 'moment'
import MomentLocaleUtils from 'react-day-picker/moment'
import Navbar from './Navbar'
import React from 'react'
import ReactDayPicker from 'react-day-picker'
import ReadOnlyField from 'components/ReadOnlyField'
import Text from 'components/Inputs/Text'

import styles from './index.scss'
import './global.scss'

const FORMAT = 'DD/MM/YYYY'

type Props = {
  bang?: boolean,
  label: string,
  field: Field,
  locale: string,
  readonly?: boolean,
  minDate?: moment,
  maxDate?: moment,
  holidays?: Object
}

type State = {
  fromMonth: Date,
  toMonth: Date,
  isFocused: boolean
}

@observer
export default class DayPicker extends React.Component {
  props: Props
  handler: ?() => void
  state: State
  daypicker: ?any
  input: ?HTMLInputElement
  clickedInside = false
  clickTimeout = null

  constructor (props: Props) {
    super(props)

    this.state = {
      fromMonth: moment().subtract(100, 'years').toDate(),
      toMonth: moment().add(3, 'year').endOf('year').toDate(),
      isFocused: false
    }

    this.handler = autorun(this.changeMonth)
  }

  componentWillUnmount () {
    if (this.handler) {
      this.handler()
      this.handler = null
    }
    clearTimeout(this.clickTimeout)
  }

  @autobind
  onDateChange (date: Date) {
    if (!this.daypicker) return
    this.daypicker.showMonth(date)
  }

  @autobind
  changeMonth () {
    const month = this.getMonth()
    if (!this.daypicker) return
    this.daypicker.showMonth(month)
  }

  getMonth (): ?Date {
    const { field } = this.props
    const date = moment(field.value, FORMAT, true)

    if (date.isValid()) return date.toDate()
    return moment().toDate()
  }

  componentDidUpdate () {
    // Force input's focus when re-rendering because of Popover
    if (this.state.isFocused && this.input) this.input.focus()
  }

  @autobind
  handleContainerMouseDown () {
    this.clickedInside = true

    // The input's onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
    this.clickTimeout = setTimeout(() => {
      this.clickedInside = false
    }, 0)
  }

  @autobind
  onDayClick (day: Date, e: SyntheticEvent) {
    const date = moment(day).format(FORMAT)

    this.props.field.set(date)
    this.setState({ isFocused: false })

    if (this.input) this.input.blur()
  }

  @autobind
  toggleFocus (toggle: boolean) {
    return () => {
      this.setState({ isFocused: toggle })
    }
  }

  @autobind
  onBlur () {
    this.setState({ isFocused: this.clickedInside })

    // Force input's focus if blur event was caused by clicking on the calendar
    if (this.clickedInside && this.input) this.input.focus()
  }

  @autobind
  onGetInputRef (el: ?HTMLInputElement) {
    this.input = el
  }

  @autobind
  isDisabled (day: Date) {
    const { minDate, maxDate } = this.props
    const { fromMonth, toMonth } = this.state
    const d = moment(day)

    let isDisabled = fromMonth > day || day > toMonth

    if (minDate) isDisabled = isDisabled || d.isBefore(minDate)
    if (maxDate) isDisabled = isDisabled || d.isAfter(maxDate)

    return isDisabled
  }

  // TODO: DRY
  isWeekend (day: Date) {
    const d = moment(day)
    return d.isoWeekday() === 7 || d.isoWeekday() === 6
  }

  // TODO: DRY
  @autobind
  isHoliday (day: Date) {
    const { holidays } = this.props

    if (!holidays) return false

    const d = moment(day)
    return Boolean(
      _.get(holidays, [d.year(), d.month() + 1, d.date()].join('.'), null)
    )
  }

  renderDayPicker () {
    const { bang, field, label, locale } = this.props
    const { fromMonth, toMonth } = this.state

    const input = (
      <Text
        bang={bang}
        label={label}
        field={field}
        getRef={this.onGetInputRef}
        onFocus={this.toggleFocus(true)}
        onBlur={this.onBlur}
        select
      />
    )

    if (!this.state.isFocused) return input

    const selectedDay = field.value

    return (
      <div className={styles.root}>
        {input}
        <div
          className={styles.dayPicker}
          onMouseDown={this.handleContainerMouseDown}
        >
          <div className={styles.arrow} />
          <ReactDayPicker
            ref={el => {
              this.daypicker = el
            }}
            modifiers={{ isWeekend: this.isWeekend, isHoliday: this.isHoliday }}
            disabledDays={this.isDisabled}
            fromMonth={fromMonth}
            toMonth={toMonth}
            initialMonth={this.getMonth()}
            locale={locale}
            localeUtils={MomentLocaleUtils}
            onDayClick={this.onDayClick}
            selectedDays={day => moment(day).format(FORMAT) === selectedDay}
            navbarElement={<Navbar />}
            captionElement={
              <Caption
                onChange={this.onDateChange}
                fromMonth={fromMonth}
                toMonth={toMonth}
                localeUtils={MomentLocaleUtils}
                /* Actually not used, ReactDayPicker will add their own */
                date={field.value}
              />
            }
          />
        </div>
      </div>
    )
  }

  renderReadonly () {
    const { field, label } = this.props

    return <ReadOnlyField label={label} value={field.value} />
  }

  render () {
    if (this.props.readonly) return this.renderReadonly()

    return (
      <div onMouseDown={this.handleContainerMouseDown}>
        {this.renderDayPicker()}
      </div>
    )
  }
}
