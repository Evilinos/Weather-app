import {
    SET_CURRENT_WEATHER_DATA,
    SET_DAILY_WEATHER_DATA,
    SET_HOURLY_WEATHER_DATA,
    TOGGLE_CURRENT_WEATHER_FETCHING, TOGGLE_DAILY_WEATHER_FETCHING, TOGGLE_HOURLY_WEATHER_FETCHING
} from "./types";

const initialState = {
    current: {
        rh: 71,
        pod: "d",
        lon: 37.61556,
        pres: 980.6,
        timezone: "Europe\/Moscow",
        ob_time: "2020-06-05 11:07",
        country_code: "RU",
        clouds: 100,
        ts: 1591355220,
        solar_rad: 161.5,
        state_code: "48",
        city_name: "Moscow",
        wind_spd: 3,
        last_ob_time: "2020-06-05T11:07:00",
        wind_cdir_full: "northeast",
        wind_cdir: "NE",
        slp: 995,
        vis: 5,
        h_angle: 20,
        sunset: "18:07",
        dni: 881.34,
        dewpt: 12.5,
        snow: 0,
        uv: 5.88534,
        precip: 0,
        wind_dir: 45,
        sunrise: "00:48",
        ghi: 807.28,
        dhi: 113.52,
        aqi: 54,
        lat: 55.75222,
        weather: {"icon": "c04d", "code": "804", "description": "Overcast clouds"},
        datetime: "2020-06-05:11",
        temp: 17.8,
        station: "E8051",
        elev_angle: 52.7,
        app_temp: 17.8
    },
    daily: {
        city_name: "Moscow",
        lon: "37.61556",
        timezone: "Europe\/Moscow",
        lat: "55.75222",
        country_code: "RU",
        state_code: "48",
        data: [{
            moonrise_ts: 1591373663,
            wind_cdir: "SSE",
            rh: 73,
            pres: 992.264,
            high_temp: 15.1,
            sunset_ts: 1591380202,
            ozone: 360.269,
            moon_phase: 0.999029,
            wind_gust_spd: 13.5278,
            snow_depth: 0,
            clouds: 96,
            ts: 1591304460,
            sunrise_ts: 1591318467,
            app_min_temp: 13,
            wind_spd: 3.16029,
            pop: 85,
            wind_cdir_full: "south-southeast",
            slp: 1009.47,
            moon_phase_lunation: 0.45,
            valid_date: "2020-06-05",
            app_max_temp: 18.7,
            vis: 0,
            dewpt: 10.7,
            snow: 0,
            uv: 1.50581,
            weather: {icon: "r02d", code: 501, description: "Moderate rain"},
            wind_dir: 157,
            max_dhi: null,
            clouds_hi: 77,
            precip: 6.75977,
            low_temp: 10.7,
            max_temp: 19.4,
            moonset_ts: 1591320066,
            datetime: "2020-06-05",
            temp: 15.8,
            min_temp: 13,
            clouds_mid: 68,
            clouds_low: 51
        },
            {
                moonrise_ts: 1591373663,
                wind_cdir: "SSE",
                rh: 73,
                pres: 992.264,
                high_temp: 15.1,
                sunset_ts: 1591380202,
                ozone: 360.269,
                moon_phase: 0.999029,
                wind_gust_spd: 13.5278,
                snow_depth: 0,
                clouds: 96,
                ts: 1591304460,
                sunrise_ts: 1591318467,
                app_min_temp: 13,
                wind_spd: 3.16029,
                pop: 85,
                wind_cdir_full: "south-southeast",
                slp: 1009.47,
                moon_phase_lunation: 0.45,
                valid_date: "2020-06-05",
                app_max_temp: 18.7,
                vis: 0,
                dewpt: 10.7,
                snow: 0,
                uv: 1.50581,
                weather: {icon: "r02d", code: 501, description: "Moderate rain"},
                wind_dir: 157,
                max_dhi: null,
                clouds_hi: 77,
                precip: 6.75977,
                low_temp: 10.7,
                max_temp: 19.4,
                moonset_ts: 1591320066,
                datetime: "2020-06-05",
                temp: 15.8,
                min_temp: 13,
                clouds_mid: 68,
                clouds_low: 51
            },
            {
                moonrise_ts: 1591373663,
                wind_cdir: "SSE",
                rh: 73,
                pres: 992.264,
                high_temp: 15.1,
                sunset_ts: 1591380202,
                ozone: 360.269,
                moon_phase: 0.999029,
                wind_gust_spd: 13.5278,
                snow_depth: 0,
                clouds: 96,
                ts: 1591304460,
                sunrise_ts: 1591318467,
                app_min_temp: 13,
                wind_spd: 3.16029,
                pop: 85,
                wind_cdir_full: "south-southeast",
                slp: 1009.47,
                moon_phase_lunation: 0.45,
                valid_date: "2020-06-05",
                app_max_temp: 18.7,
                vis: 0,
                dewpt: 10.7,
                snow: 0,
                uv: 1.50581,
                weather: {icon: "r02d", code: 501, description: "Moderate rain"},
                wind_dir: 157,
                max_dhi: null,
                clouds_hi: 77,
                precip: 6.75977,
                low_temp: 10.7,
                max_temp: 19.4,
                moonset_ts: 1591320066,
                datetime: "2020-06-05",
                temp: 15.8,
                min_temp: 13,
                clouds_mid: 68,
                clouds_low: 51
            },
            {
                moonrise_ts: 1591373663,
                wind_cdir: "SSE",
                rh: 73,
                pres: 992.264,
                high_temp: 15.1,
                sunset_ts: 1591380202,
                ozone: 360.269,
                moon_phase: 0.999029,
                wind_gust_spd: 13.5278,
                snow_depth: 0,
                clouds: 96,
                ts: 1591304460,
                sunrise_ts: 1591318467,
                app_min_temp: 13,
                wind_spd: 3.16029,
                pop: 85,
                wind_cdir_full: "south-southeast",
                slp: 1009.47,
                moon_phase_lunation: 0.45,
                valid_date: "2020-06-05",
                app_max_temp: 18.7,
                vis: 0,
                dewpt: 10.7,
                snow: 0,
                uv: 1.50581,
                weather: {icon: "r02d", code: 501, description: "Moderate rain"},
                wind_dir: 157,
                max_dhi: null,
                clouds_hi: 77,
                precip: 6.75977,
                low_temp: 10.7,
                max_temp: 19.4,
                moonset_ts: 1591320066,
                datetime: "2020-06-05",
                temp: 15.8,
                min_temp: 13,
                clouds_mid: 68,
                clouds_low: 51
            },
            {
                moonrise_ts: 1591373663,
                wind_cdir: "SSE",
                rh: 73,
                pres: 992.264,
                high_temp: 15.1,
                sunset_ts: 1591380202,
                ozone: 360.269,
                moon_phase: 0.999029,
                wind_gust_spd: 13.5278,
                snow_depth: 0,
                clouds: 96,
                ts: 1591304460,
                sunrise_ts: 1591318467,
                app_min_temp: 13,
                wind_spd: 3.16029,
                pop: 85,
                wind_cdir_full: "south-southeast",
                slp: 1009.47,
                moon_phase_lunation: 0.45,
                valid_date: "2020-06-05",
                app_max_temp: 18.7,
                vis: 0,
                dewpt: 10.7,
                snow: 0,
                uv: 1.50581,
                weather: {icon: "r02d", code: 501, description: "Moderate rain"},
                wind_dir: 157,
                max_dhi: null,
                clouds_hi: 77,
                precip: 6.75977,
                low_temp: 10.7,
                max_temp: 19.4,
                moonset_ts: 1591320066,
                datetime: "2020-06-05",
                temp: 15.8,
                min_temp: 13,
                clouds_mid: 68,
                clouds_low: 51
            },
            {
                moonrise_ts: 1591373663,
                wind_cdir: "SSE",
                rh: 73,
                pres: 992.264,
                high_temp: 15.1,
                sunset_ts: 1591380202,
                ozone: 360.269,
                moon_phase: 0.999029,
                wind_gust_spd: 13.5278,
                snow_depth: 0,
                clouds: 96,
                ts: 1591304460,
                sunrise_ts: 1591318467,
                app_min_temp: 13,
                wind_spd: 3.16029,
                pop: 85,
                wind_cdir_full: "south-southeast",
                slp: 1009.47,
                moon_phase_lunation: 0.45,
                valid_date: "2020-06-05",
                app_max_temp: 18.7,
                vis: 0,
                dewpt: 10.7,
                snow: 0,
                uv: 1.50581,
                weather: {icon: "r02d", code: 501, description: "Moderate rain"},
                wind_dir: 157,
                max_dhi: null,
                clouds_hi: 77,
                precip: 6.75977,
                low_temp: 10.7,
                max_temp: 19.4,
                moonset_ts: 1591320066,
                datetime: "2020-06-05",
                temp: 15.8,
                min_temp: 13,
                clouds_mid: 68,
                clouds_low: 51
            },
            {
                moonrise_ts: 1591373663,
                wind_cdir: "SSE",
                rh: 73,
                pres: 992.264,
                high_temp: 15.1,
                sunset_ts: 1591380202,
                ozone: 360.269,
                moon_phase: 0.999029,
                wind_gust_spd: 13.5278,
                snow_depth: 0,
                clouds: 96,
                ts: 1591304460,
                sunrise_ts: 1591318467,
                app_min_temp: 13,
                wind_spd: 3.16029,
                pop: 85,
                wind_cdir_full: "south-southeast",
                slp: 1009.47,
                moon_phase_lunation: 0.45,
                valid_date: "2020-06-05",
                app_max_temp: 18.7,
                vis: 0,
                dewpt: 10.7,
                snow: 0,
                uv: 1.50581,
                weather: {icon: "r02d", code: 501, description: "Moderate rain"},
                wind_dir: 157,
                max_dhi: null,
                clouds_hi: 77,
                precip: 6.75977,
                low_temp: 10.7,
                max_temp: 19.4,
                moonset_ts: 1591320066,
                datetime: "2020-06-05",
                temp: 15.8,
                min_temp: 13,
                clouds_mid: 68,
                clouds_low: 51
            }]
    },
    hourly: {
        city_name: 'Moscow',
        lon: '37.61556',
        timezone: 'Europe/Moscow',
        lat: '55.75222',
        country_code: 'RU',
        state_code: '48',
        data: [
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-06T15:00:00',
                timestamp_local: '2020-03-06T12:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:17',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:18',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:19',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:20',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:21',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:22',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:23',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:17',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:17',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:17',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:17',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:17',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:17',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
            {
                wind_cdir: 'SSE',
                rh: 77,
                pod: 'd',
                timestamp_utc: '2020-06-05T17:00:00',
                pres: 992.28,
                solar_rad: 18.205,
                ozone: 362.968,
                weather: {
                    icon: 'c04d',
                    code: 803,
                    description: 'Overcast clouds'
                },
                wind_gust_spd: 8.76872,
                timestamp_local: '2020-06-05T20:00:00',
                snow_depth: 0,
                clouds: 100,
                ts: 1591376400,
                wind_spd: 3.00825,
                pop: 20,
                wind_cdir_full: 'south-southeast',
                slp: 1009.54,
                dni: 356.32,
                dewpt: 10.7,
                snow: 0,
                uv: 0.6323,
                wind_dir: 149,
                clouds_hi: 100,
                precip: 0.248046875,
                vis: 15.4126,
                dhi: 40.22,
                app_temp: 14.5,
                datetime: '2020-06-05:17',
                temp: 14.5,
                ghi: 72.82,
                clouds_mid: 70,
                clouds_low: 58
            },
        ],
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER_DATA:
            return {...state, current: action.payload};
        case SET_DAILY_WEATHER_DATA:
            return {...state, daily: action.payload};
        case SET_HOURLY_WEATHER_DATA:
            return {...state, hourly: action.payload};
        case TOGGLE_CURRENT_WEATHER_FETCHING:
            return {...state, current: {...state.current, isFetching: action.payload}};
        case TOGGLE_DAILY_WEATHER_FETCHING:
            return {...state, daily: {...state.daily, isFetching: action.payload}};
        case TOGGLE_HOURLY_WEATHER_FETCHING:
            return {...state, hourly: {...state.hourly, isFetching: action.payload}};
        default:
            return state
    }
};

export default rootReducer